import jsonfile from "jsonfile"
import path, { resolve } from "path";
import { IUser } from "../models/IUser";

export class UserUtil {
    private static userJsonPath = path.join(__dirname, '..', "data", "users.json");
    public static getAllUsers(): Promise<IUser[]> {
        // console.log(this.userJsonPath);
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.userJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    // console.log(data);
                    resolve(data);
                }
            })
        })
    }
    public static getUser(userId: Number): Promise<IUser | undefined> {
        // console.log(this.userJsonPath);
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.userJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    let userList: IUser[] = data;
                    let user: IUser | undefined = userList.find(item => item.id === userId);
                    resolve(user);
                }
            })
        })
    }
    public static getUserName(userName: string): Promise<IUser | undefined> {
        // console.log(this.userJsonPath);
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.userJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    let userList: IUser[] = data;
                    let user: IUser | undefined = userList.find(item => item.name === userName);
                    resolve(user);
                }
            })
        })
    }

    public static UserLat(lat: string): Promise<IUser | undefined> {
        return new Promise((resolve, reject) => {
            jsonfile.readFile(this.userJsonPath, (err, data) => {
                if (err) {
                    reject(err);
                }
                else {
                    let userData: IUser[] = data;
                    let user: IUser | undefined = userData.find(item => item.address.geo.lat === lat);
                    resolve(user);
                }
            })
        })
    }
}