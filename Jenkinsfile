pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
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
    }
}
