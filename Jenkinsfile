pipeline {
    agent any

    stages {
        stage('Install Dependencies') {
            steps {
                bat 'cd C:\\Users\\naolk\\Documents\\project\\jupiter\\Server && npm install'
                bat 'cd C:\\Users\\naolk\\Documents\\project\\jupiter\\Frontend && npm install'
            }
        }

        stage('Build React App') {
            steps {
                bat 'cd C:\\Users\\naolk\\Documents\\project\\jupiter\\Frontend && npm run build'
            }
        }

        stage('Start Node.js Server') {
            steps {
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
