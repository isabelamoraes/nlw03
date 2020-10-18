interface Response{
    token: string;
    user: string
}

export default function Auth(): Promise<Response>{
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                token: 'djkahdjkhasdkhakdhjkasd',
                user: 'isabela@happy.com.br'
            })
        }, 2000)
    })
}