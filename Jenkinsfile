pipeline {
    agent any
    environment{
        EMAIL_RECEPT = "younessaitmbarek97@gmail.com"
    }
    stages {
        stage ('clone repo'){
            steps {
                echo 'clone repo'
                git 'https://github.com/YNS-JNS/product-forms.git'
            }
        }
        stage ('install dependencies'){
            steps {
                echo 'install dependencies'
                // sh 'npx install' : pour (linux)
                bat 'npx install'
            }
        }
        stage ('quality code'){
            steps {
                echo 'run lint'
                bat 'npx run lint'
            }
        }
        stage ('build angular prod'){
            steps {
                echo 'run build'
                bat 'npx run build --prod'
            }
        } 
        stage ('build image docker'){
            steps {
                echo 'build image docker'
                bat 'docker build -t angular-app'
            }
        }    
        stage ('run docker container'){
            steps {
                echo 'run docker container'
                bat 'docker run -d -p 8080:80 angular-app'
            }
        }  
    }
    post {
        success {
            mail to: "${EMAIL_RECEPT}",
            subject: "pipeline success",
            body: "Pipeline a ete termine avec success"
        }
        failure {
            mail to: "${EMAIL_RECEPT}",
            subject: "echec d'execution",
            body: "Pipeline a ete termine avec echec"
        }
    }
}