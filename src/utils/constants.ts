export const development: boolean = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

export const APIHost = development ? '/api' : 'https://google.com';

export const ACCESS_TOKEN_KEY = 'token';

export const URL_BASE = 'http://api.training.div3.pgtest.co/api/v1/';


export const STATUS_ = [
    {
        title: 'processing',
        value: 'processing',
        color: '#ffc96f'
    },
    {
        title: "finished",
        value: 'finished', 
        color: "#61ca9f"
    },
    {
        title: 'Pending',
        value: 'pending',
        color: '#9db0be'
    },
    {
        title: 'received',
        value: 'received',
        color: "#60c2e8"
    }
]

export const TITLE_TABLE = [ "status", "date", "currency", "total", "invoice" ]