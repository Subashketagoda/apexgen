$chromePath = "C:\Program Files\Google\Chrome\Application\chrome.exe"
$outDir = "C:\Users\User\Desktop\apexgen\public\images\projects"

if (!(Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir
}

$targets = @(
    @{
        name = "cargo-pizzeria-real.png"
        url = "https://cargopizzeria.online/"
    },
    @{
        name = "69-studio-real.png"
        url = "https://69studiobysubash.online/"
    },
    @{
        name = "dinepro-advisors-real.png"
        url = "https://dineproadvisors.online/"
    }
)

foreach ($target in $targets) {
    $dest = Join-Path $outDir $target.name
    Write-Host "Capturing $($target.name) from $($target.url)..."
    
    $args = @(
        "--headless=new",
        "--window-size=1440,900",
        "--hide-scrollbars",
        "--virtual-time-budget=8000",
        "--screenshot=$dest",
        $target.url
    )
    
    Start-Process -FilePath $chromePath -ArgumentList $args -Wait
    
    if (Test-Path $dest) {
        $size = (Get-Item $dest).Length
        Write-Host "Success: $($target.name) ($size bytes)"
    } else {
        Write-Host "Failed to capture $($target.name)"
    }
}
