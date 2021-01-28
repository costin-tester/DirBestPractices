import type GitFile from "./gitFile";
export const ROOT_FOLDER = "Best practices";

export default class GitContents{ 
    path: string;    
    type: string;
    file: GitFile;
    dirList: GitFile[];    

    parentPath(): string{
        let idx = this.path.lastIndexOf("/");
        if(idx > 0){
            return this.path.substr(0, idx);
        }
        else{
            return null;
        }
    }
}