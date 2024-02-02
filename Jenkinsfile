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
                    bat 'npm install'
                }
                dir('server') {
                    bat 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Run tests for your project
                dir('client') {
                    bat 'npm test'
                }
                dir('server') {
                    bat 'npm test'
                }
            }
        }

        stage('Build') {
            steps {
                // Build your project
                dir('client') {
                    bat 'npm run build'
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
                    bat 'npm start'
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
