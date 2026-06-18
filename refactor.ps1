$files = Get-ChildItem -Path ".\app-v1-1\css\*.css" -File

$replacements = @{
    "--bg-primary" = "--surface-page"
    "--bg-secondary" = "--surface-card"
    "--bg-tertiary" = "--surface-sunken"
    "--bg-elevated" = "--surface-raised"
    "--text-muted" = "--text-tertiary"
    "--accent-primary" = "--action-primary"
    "--accent-hover" = "--action-primary-hover"
    "--accent-subtle" = "--action-secondary"
    "--glass-bg" = "--surface-card"
    "--glass-border" = "--border-default"
    "--font-body" = "--font-sans"
    "--success" = "--feedback-success-text"
    "--warning" = "--feedback-warning-text"
    "--error" = "--feedback-error-text"
}

foreach ($file in $files) {
    if ($file.Name -eq "tokens.css" -or $file.Name -eq "variables.css") { continue }
    
    $content = Get-Content $file.FullName -Raw
    $original = $content
    
    foreach ($key in $replacements.Keys) {
        $content = $content -replace $key, $replacements[$key]
    }
    
    if ($content -cne $original) {
        Set-Content -Path $file.FullName -Value $content -Encoding UTF8
        Write-Host "Updated $($file.Name)"
    }
}
