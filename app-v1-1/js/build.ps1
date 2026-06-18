$files = @(
    "data-inline.js",
    "utils/random.js",
    "utils/blood-logic.js",
    "core/event-bus.js",
    "core/state-manager.js",
    "core/storage.js",
    "core/router.js",
    "ui/theme.js",
    "ui/accessibility.js",
    "audio/audio-engine.js",
    "simulation/particle.js",
    "simulation/particle-system.js",
    "simulation/agglutination.js",
    "simulation/reagent-well.js",
    "simulation/animation-loop.js",
    "simulation/simulation-engine.js",
    "game/score-manager.js",
    "game/achievements.js",
    "game/leaderboard.js",
    "quiz/question-loader.js",
    "quiz/quiz-engine.js",
    "quiz/quiz-renderer.js",
    "screens/simulator-screen.js",
    "screens/quiz-screen.js",
    "screens/transfusion-screen.js",
    "screens/myths-screen.js",
    "screens/encyclopedia-screen.js",
    "screens/teacher-screen.js",
    "main.js"
)

$bundlePath = "bundle.js"
$finalContent = ""

foreach ($file in $files) {
    Write-Host "Processing $file..."
    $path = Join-Path (Get-Location) $file
    if (Test-Path $path) {
        $content = Get-Content $path -Raw -Encoding UTF8
        
        # Remove imports and exports
        $content = $content -replace 'import\s+.*?;', ''
        $content = $content -replace 'export\s+(default\s+)?', ''
        
        $finalContent += "`n// --- FILE: $file ---`n"
        $finalContent += $content
    } else {
        Write-Warning "File not found: $path"
    }
}

# Fix Mojibake: Use UTF8 without BOM explicitly
$Utf8NoBom = New-Object System.Text.UTF8Encoding($false)
[System.IO.File]::WriteAllText($bundlePath, $finalContent, $Utf8NoBom)

Write-Host "Bundle created successfully: $bundlePath"
