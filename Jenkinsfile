pipeline {
    agent any
    environment {
        EMAIL_RECEPT = "younessaitmbarek97@gmail.com"
    }
    stages {
        stage('clone repo') {
            steps {
                echo 'clone repo'
                git 'https://github.com/YNS-JNS/product-forms.git'
            }
        }
        stage('install dependencies') {
            steps {
                echo 'install dependencies'
                bat 'npm install'
            }
        }
        stage('quality code') {
            steps {
                echo 'run lint'
                bat 'npm run lint'
            }
        }
        stage('build angular prod') {
            steps {
                echo 'run build'
                bat 'npm run build --prod'
            }
        }
        stage('build image docker') {
            steps {
                echo 'build image docker'
                bat 'docker build -t angular-app .'
            }
        }
        stage('run docker container') {
            steps {
                echo 'run docker container'
                bat 'docker stop angular-app || echo "No container to stop"'
                bat 'docker rm angular-app || echo "No container to remove"'
                bat 'docker run -d -p 8080:80 --name angular-app angular-app'
            }
        }
    }
    post {
        success {
            mail to: "${EMAIL_RECEPT}",
            subject: "Pipeline Success",
            body: "Pipeline finished successfully"
        }
        failure {
            mail to: "${EMAIL_RECEPT}",
            subject: "Échec d'exécution",
            body: "Something went wrong"
        }
    }
}
