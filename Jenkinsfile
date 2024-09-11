pipeline {
    agent {
       label 'todo-app-server'
    }
    environment{
        DOCKER_HUB = 'minhdinh04'
        DOCKER_CREDENTIALS= credentials('dockerHub')
        NAME_BACKEND = "todo-app_task-api"
        NAME_FRONTEND= "todo-app_client"
        NAME_NGINX = "todo-app_nginx"
        NAME_MONGO = "mongo"
        DOCKER_TAG = "${GIT_BRANCH.tokenize('/').pop()}-${GIT_COMMIT.substring(0,7)}"
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
        stage("Build and Push to Docker Hub"){
            steps{
                script{
                    env.IMAGE_TAG = DOCKER_TAG
                    withCredentials([usernamePassword(credentialsId: 'dockerHub', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
                    sh "docker-compose down -v"
                    sh "echo $DOCKER_PASS || docker login -u $DOCKER_USER --password-stdin"
                    // sh "IMAGE_TAG=${IMAGE_TAG} \
                    // && docker-compose build \
                    // && docker tag ${NAME_BACKEND}:${DOCKER_TAG} ${DOCKER_HUB}/${NAME_BACKEND}:${DOCKER_TAG} \
                    // && docker tag ${NAME_FRONTEND}:${DOCKER_TAG} ${DOCKER_HUB}/${NAME_FRONTEND}:${DOCKER_TAG} \
                    // && docker tag ${NAME_MONGO}:latest ${DOCKER_HUB}/${NAME_MONGO}:latest \
                    // && docker tag ${NAME_NGINX}:${DOCKER_TAG} ${DOCKER_HUB}/${NAME_NGINX}:${DOCKER_TAG} \
                    // && echo $DOCKER_PASS || docker login -u $DOCKER_USER --password-stdin \
                    // && docker push ${DOCKER_HUB}/${NAME_BACKEND}:${DOCKER_TAG} \
                    // && docker push ${DOCKER_HUB}/${NAME_FRONTEND}:${DOCKER_TAG} \
                    // && docker push ${DOCKER_HUB}/${NAME_NGINX}:${DOCKER_TAG} \
                    // && docker push ${DOCKER_HUB}/${NAME_MONGO}:${DOCKER_TAG}"
                    }
                }
            }
        }
        // stage("Deploy"){
        //     steps {
        //         echo "Deploying the container"
        //         // sh "docker-compose version"
        //         // // sh "docker-compose down && docker-compose up -d"
        //         // // dir('task_manager') {
        //         // //     // Check Docker Compose version
        //         // //     sh "ls -la"
        //         // // }
        //         // sh "docker-compose down"
        //         sh "docker rm -f ${NAME_BACKEND} ${NAME_FRONTEND} ${NAME_NGINX} ${NAME_MONGO} \
        //             && docker pull ${DOCKER_HUB}/${NAME_BACKEND}:${DOCKER_TAG} \
        //             && docker pull ${DOCKER_HUB}/${NAME_FRONTEND}:${DOCKER_TAG} \
        //             && docker pull ${DOCKER_HUB}/${NAME_NGINX}:${DOCKER_TAG} \
        //             && docker pull ${DOCKER_HUB}/${NAME_MONGO}:latest \
        //             && docker run --name=${NAME_BACKEND}:${DOCKER_TAG} ${DOCKER_HUB}/${NAME_BACKEND}:${DOCKER_TAG} \
        //             && docker run --name=${NAME_FRONTEND}:${DOCKER_TAG} ${DOCKER_HUB}/${NAME_FRONTEND}:${DOCKER_TAG} \
        //             && docker run --name=${NAME_NGINX}:${DOCKER_TAG} ${DOCKER_HUB}/${NAME_NGINX}:${DOCKER_TAG} \
        //             && docker run --name=${NAME_MONGO}:latest ${DOCKER_HUB}/${NAME_MONGO}:latest \
        //             "
        //     }
        // }
    }
}


