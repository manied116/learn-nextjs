import {useRouter} from 'next/router'

export default function History() {
    const router = useRouter()
    const {params = []} = router.query
    if(params.length ===2){
        return(
            <h3>Your view feature {params[0]} and concept of {params[1]}</h3>
        )
    }else if(params.length ===1 ){
        return (
            <h3>just fix</h3>
        )
    }
    return (
        <div>
            <h3>History Home page</h3>
        </div>
    );
}