pipeline {
    agent any

stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }

       
        stage('Build') {
            steps {
                bat 'cd Server/server.js npm run build'
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps here, for example, copying files to a server
                // bat 'your_deploy_command_here'
            }
        }

        stage('Security Scan') {
            steps {
                // Add security scan steps here, if applicable
            }
        }
    }

    post {
        success {
            // Add post-build actions if needed
        }
    }
}
