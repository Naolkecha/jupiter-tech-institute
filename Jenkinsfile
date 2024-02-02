pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build') {
            steps {
                sh 'your_build_command_here'
            }
        }

        stage('Test') {
            steps {
                sh 'your_test_command_here'
            }
        }

        stage('Deploy') {
            steps {
                sh 'your_deploy_command_here'
            }
        }

        stage('Security Scan') {
            steps {
                script {
                    withSonarQubeEnv('SonarQubeServer') {
                        sh 'your_sonar_scan_command_here'
                    }
                }
            }
        }
    }
}
