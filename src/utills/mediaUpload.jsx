import { createClient } from "@supabase/supabase-js";

//create a client to connect with supabase
const supabase=createClient(
    //to insert project url
    "https://icdagiiaejxojbvrigtt.supabase.co",
    //to insert anon public key
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImljZGFnaWlhZWp4b2pidnJpZ3R0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3NzI4NzIsImV4cCI6MjA3NzM0ODg3Mn0.lLIyt1UE_ksNvfwzW_FbzVc2Yj7R7xDWPAGDgfYp5Eg"
);

export default function mediaUpload(file){
    const promise=new Promise(
        (resolve,reject)=>{
            if(file==null){
                reject("No file selected")

            }
            const timestamp=new Date().getTime()
            const newFileName=timestamp+file.name

            //To upload an image into supabase
            supabase.storage.from("images").upload(newFileName,file,
                {
                    cacheControl:"3600",
                    upsert:false,
                }

            ).then(
                ()=>{
                    //To get image url from supabase
                    const url=supabase.storage.from("images").getPublicUrl(newFileName).data.publicUrl
                    resolve(url)
                }

            ).catch(
                (error)=>{
                    console.log(error)
                    reject("File upload failed")

                }
            )




        }
    )

    return promise

}

