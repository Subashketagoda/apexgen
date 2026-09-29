$client = New-Object System.Net.WebClient
$html = $client.DownloadString("http://localhost:3005/")
Write-Host "Contains cargo-pizzeria-screenshot.jpg: " $html.Contains("cargo-pizzeria-screenshot.jpg")
Write-Host "Contains 69-studio-screenshot.png: " $html.Contains("69-studio-screenshot.png")
Write-Host "Contains dinepro-advisors-screenshot.png: " $html.Contains("dinepro-advisors-screenshot.png")
Write-Host "Contains APEXGEN CONCEPTS: " $html.Contains("APEXGEN CONCEPTS")
