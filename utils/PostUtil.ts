import jsonfile from 'jsonfile';
import path from 'path';
import { IPost } from '../models/IPost';

export class PostUtil {
    private static postJsonPath = path.join(__dirname, "..", "data", "posts.json");
    public static getAllPosts(): Promise<IPost[]> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.postJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    resolve(data);
                }
            })
        })
    }

    public static getPost(postId: Number): Promise<IPost | undefined> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.postJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    let postData: IPost[] = data;
                    let post: IPost | undefined = postData.find(item => item.id === postId);
                    resolve(post);
                }
            })
        })
    }
}
