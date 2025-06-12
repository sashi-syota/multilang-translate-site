import boto3

def lambda_handler(event, context):
    translate = boto3.client(service_name='translate', use_ssl=True)
    
    input_text = event['queryStringParameters'].get('input_text','')
    source_lang = event['queryStringParameters'].get('source_lang','ja')
    target_lang = event['queryStringParameters'].get('target_lang','en')


    result = translate.translate_text(
        Text=input_text,
        SourceLanguageCode=source_lang, 
        TargetLanguageCode=target_lang
    ).get('TranslatedText')
    
    return {
        'statusCode': 200,
        'headers': {
            'Access-Control-Allow-Origin': '*'
        },
        'body': result
    }