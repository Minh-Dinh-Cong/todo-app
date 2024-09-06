pipeline {
    agent {
       label 'todo-app-server'
    }
    stages {
        stage('Info') {
            steps {
                echo 'Hello World'
                sh(script: """ ls -la """,label: "first stage")
            }
        }
        stage("Check file .env to workspace"){
            steps{
                withCredentials([file(credentialsId: '.env', variable: 'mySecretEnvFile')]){
                sh 'cat $mySecretEnvFile'
              }
            }
        }
        stage("Deploy"){
            steps {
                echo "Deploying the container"
                sh "docker-compose version"
                sh "docker-compose down && docker-compose up -d"
                // dir('task_manager') {
                //     // Check Docker Compose version
                //     sh "ls -la"
                // }
                // sh "docker-compose down"
            }
        }
    }
}


