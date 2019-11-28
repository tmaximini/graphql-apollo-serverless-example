rm -rf .deploy
mkdir .deploy

# package
aws cloudformation package \
  --template-file cloudformation/template.yaml \
  --output-template-file .deploy/serverless-output.yaml \
  --s3-bucket dropp-graqhql-server


# deploy
aws cloudformation deploy \
  --template-file .deploy/serverless-output.yaml \
  --stack-name dev \
  --capabilities CAPABILITY_IAM