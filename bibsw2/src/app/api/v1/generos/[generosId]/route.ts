import {Next NextResponse} from "next/server";

export asybc function GET(request : Request, context : any){ 
    const {params} = context;

    return NextResponse.json({"param" : params.generoId});
    
}