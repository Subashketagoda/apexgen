Get-NetTCPConnection -State Listen | Where-Object { $_.LocalPort -in 3000..3010 } | ForEach-Object {
    $proc = Get-Process -Id $_.OwningProcess -ErrorAction SilentlyContinue
    [PSCustomObject]@{
        Port = $_.LocalPort
        PID = $_.OwningProcess
        Name = $proc.ProcessName
        Path = $proc.Path
    }
}
