node
{
 
  stage("CheckOutCodeGit")
  {
   git 'https://github.com/ristabel/profitcalc.git'
 }
 
 stage("Build")
 {
 nodejs(nodeJSInstallationName: 'nodejs16.19.1') {
        sh 'npm install'
    }
 }  
 
  stage('ExecuteSonarQubeReport') {
     nodejs(nodeJSInstallationName: 'nodejs16.19.1') {
     //   sh 'npm run sonar'
    }
      
        } 
		
    stage('UploadintoNexus') {
       nodejs(nodeJSInstallationName: 'nodejs16.19.1') {
         // sh 'npm publish'
      }
      
          }	
 
 stage('RunNodeJsApp')
 {
 //sh "./scripts/run.sh"
 nodejs(nodeJSInstallationName: 'nodejs16.19.1') {
        sh 'npm start &'
    }
}    
    
}
