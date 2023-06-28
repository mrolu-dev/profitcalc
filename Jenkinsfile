node
{
 
  stage("CheckOutCodeGit")
  {
   git branch: 'master', credentialsId: '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', url:'https://github.com/ristabel/profitcalc.git'
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
