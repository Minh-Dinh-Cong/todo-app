pipeline {
    agent {
       label 'todo-app-server'
    }
    stages {
        
        stage("Copy file .env to workspace"){
            steps{
                withCredentials([file(credentialsId: '.env', variable: 'mySecretEnvFile')]){
                sh 'cp $mySecretEnvFile $WORKSPACE'
              }
            }
        }
        stage('Info') {
            steps {
                echo 'Hello World'
                sh(script: """ ls -la """,label: "first stage")
            }
        }
        // stage("Deploy"){
        //     steps {
        //         echo "Deploying the container"
        //         sh "docker-compose up -d"
        //     }
        // }
    }
}

