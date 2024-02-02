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
            def remoteDir = '/home/jupitertechinsti/public_html'
            def cpanelServer = 'jupitertechinsti@jupitertechinstitute.com'
            def ftpUsername = 'cicd@jupitertechinstitute.com'
            def ftpPassword = '?Iy~vFcD^.XK'
            def localFilesPath = "C:\\Users\\naolk\\Documents\\project\\jupiter\\Frontend\\build\\*"

            // Use FTP to upload files
            bat "curl -T ${localFilesPath} ftp://${ftpUsername}:${ftpPassword}@${cpanelServer}/${remoteDir}/"

            // Optional: Trigger any additional actions after upload
            // bat "ssh ${cpanelServer} 'cd ${remoteDir}/Server && pm2 restart server'"
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
