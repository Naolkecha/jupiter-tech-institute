pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout the code from the repository
                checkout scm
            }
        }
        

        stage('Build and Run Node.js App') {
            steps {
                script {
                    // Change to the app directory
                    dir('app') {
                        // Run npm install (if needed)
                        sh 'npm install'

                        // Run the Node.js app
                        sh 'node app.js'
                    }
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
