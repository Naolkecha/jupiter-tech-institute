pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                // Step 1: Install Node.js Dependencies for the server
                bat 'cd C:\\Users\\naolk\\Documents\\project\\jupiter\\Server && npm install'
                
                // Step 2: Install Node.js Dependencies for the client
                bat 'cd C:\\Users\\naolk\\Documents\\project\\jupiter\\Frontend && npm install'
            }
        }

        stage('Build React App') {
            steps {
                // Step 3: Build the React App
                bat 'cd C:\\Users\\naolk\\Documents\\project\\jupiter\\Frontend && npm run build'
            }
        }

        stage('Start Node.js Server') {
            steps {
                // Step 4: Start the Node.js Server in the background
                bat 'start cmd /c "cd C:\\Users\\naolk\\Documents\\project\\jupiter\\Server && npm start"'
            }
        }

         stage('Upload to cPanel') {
        steps {
            script {
                def localPath = "C:\\Users\\naolk\\Documents\\project\\jupiter\\Frontend\\build"
                def remoteDir = '/home/jupitertechinsti/public_html/'
                def cpanelServer = 'jupitertechinstitute.com'
                def ftpUsername = 'newuser@jupitertechinstitute.com'
                def ftpPassword = '=5BVd.H_5UL{'

                // Iterate through each file and upload to cPanel using curl
                bat """
                    @echo off
                    setlocal enabledelayedexpansion
                    for %%i in ("${localPath}\\*") do (
                        curl -T "%%i" ftp://${ftpUsername}:${ftpPassword}@${cpanelServer}/${remoteDir}
                    )
                    endlocal
                """
            }
        }
    }

    }

    post {
        success {
            echo 'Pipeline succeeded! Triggering notifications...'
            // Add notification steps (e.g., email, Slack) on success
        }
        failure {
            echo 'Pipeline failed! Triggering notifications...'
            // Add notification steps (e.g., email, Slack) on failure
        }
    }
}
