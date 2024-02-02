pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        stage('Install Dependencies') {
            steps {
                // Install dependencies for your project
                dir('client') {
                    bat 'bat 'cd /Frontend npm install'
                }
                dir('server') {
                    bat 'cd /Frontend npm install'
                }
            }
        }

        stage('Build') {
            steps {
                // Build your project
                dir('client') {
                    bat 'cd /Frontend npm run build'
                }
                dir('server') {
                    // Add any specific build steps for the server, if needed
                }
            }
        }

        stage('Run Server') {
            steps {
                // Run the server
                dir('server') {
                    bat 'cd /Frontend npm start'
                }
            }
        }

        stage('Deploy') {
            steps {
                // Add deployment steps (replace with your deployment command)
                echo 'Deploying the application'
            }
        }
    }

    post {
        success {
            // Actions to execute on successful build
            echo 'Build successful!'
        }
        failure {
            // Actions to execute on build failure
            echo 'Build failed!'
        }
    }
}
