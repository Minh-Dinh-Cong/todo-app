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
    }
}
