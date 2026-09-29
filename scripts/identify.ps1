Add-Type -AssemblyName System.Drawing

$f1 = "C:\Users\User\.gemini\antigravity-ide\brain\26cac839-8ccc-4e6d-b450-c6df2cb867e9\.user_uploaded\media_1789220806409.png"
$f2 = "C:\Users\User\.gemini\antigravity-ide\brain\26cac839-8ccc-4e6d-b450-c6df2cb867e9\.user_uploaded\media_1789220806412.jpg"
$f3 = "C:\Users\User\.gemini\antigravity-ide\brain\26cac839-8ccc-4e6d-b450-c6df2cb867e9\.user_uploaded\media_1789220806472.png"

$img1 = [System.Drawing.Image]::FromFile($f1)
$img2 = [System.Drawing.Image]::FromFile($f2)
$img3 = [System.Drawing.Image]::FromFile($f3)

Write-Host "409.png: $($img1.Width)x$($img1.Height)"
Write-Host "412.jpg: $($img2.Width)x$($img2.Height)"
Write-Host "472.png: $($img3.Width)x$($img3.Height)"

$img1.Dispose()
$img2.Dispose()
$img3.Dispose()
