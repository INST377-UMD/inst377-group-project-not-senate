const express = require('express')
const supabaseClient = require('@supabase/supabase-js')
const app = express()
const port = 4000;
var bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use(express.static(__dirname  + '/public'));


const supabaseURL = "https://rxfktjmdcdlfvlltjkcb.supabase.co"
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4Zmt0am1kY2RsZnZsbHRqa2NiIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMTI4MTI5NSwiZXhwIjoyMDE2ODU3Mjk1fQ.TR2rnbJJgUvFyMqrvuLgcalj53wStGUH_lEEvjQ2sSM'
const supabase = supabaseClient.createClient(supabaseURL, supabaseKey)


app.get('/', (req,res) => {
    res.sendFile('public/index.html')
});


app.post('/checkEmail', async (req,res) => {
    const {data, error} = await supabase
    .from('final')
    .select()
    if (error) {
        console.log(error)
    } else if (data) {
        res.send(data)
    }

    //console.log(res)
})

app.post('/addEmail', async (req,res) => {
    console.log("Adding email")
    let new_email = req.body.email;

    const {data, error} = await supabase
    .from('final')
    .insert([
        {'email': new_email}
    ])

    //console.log(data);
    res.header('Content-type', 'application/json')
    res.send(data)
})

app.listen(port, () => {
    console.log('running')
})