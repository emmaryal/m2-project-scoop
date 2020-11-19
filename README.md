# M2 Project Structure
### YOUR README/DOCUMENTATION
# Scoop
# Scoop
​
​
​
#### Description
​
A forum for sharing zero waste tips. 
​
​
​
#### User Stories
​
- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **Home page**: As a user I want to search for tips
- **Sign up:** As a user I want to be able to create an account
- **Log in:** As a user I want to be able to log in
- **Private user area: **As a user I want to be able to share tips
- **Search results page:** As a user I want to be able to read other users tips
- **Private user area:** As a user I want to be able to delete my tips
- **Private user area:** As a user I want to be able to update my tips
​
​
​
#### Server Routes (Back-end)
​
| Method   | Route                 | Description                                                  | Request - body    |
| -------- | --------------------- | ------------------------------------------------------------ | ----------------- |
| `GET`    | `/`                   | Main page route. Renders home `home`view                     |                   |
| `GET`    | `/auth/login`         | Renders `login`form view                                     |                   |
| `POST`   | `/auth/login`         | Sends `login`form data to the server                         | {email, password} |
| `GET`    | `/auth/signup`        | Renders `signup`form view                                    |                   |
| `POST`   | `/auth/signup`        | Sends `signup`info to the server and creates a new user in the DB (user model) | {email, password} |
| `GET`    | `/tips`               | Render search results page                                   |                   |
| `POST`   | `/tips`               | Add tips                                                     |                   |
| `GET`    | `/tips/searchresults` | Get tips by key word or view all                             |                   |
| `DELETE` | `/private/tips`       | Delete tips by Id                                            |                   |
| `PUT`    | `/private/tips`       | Update tips                                                  |                   |
​
​
​
#### Models
​
​
​
###### User Model
​
```
{
   name: {type: String, unique: true, required: true},
   password: {type: String, required: true}, // (validated bcrypt),
   tips: [{type: Schema.Types.ObjectId, ref: "Tips" }]
},
{
   timestamps: {createdAt: "created_at",},
}
```
​
​
​
###### Tips Model
​
```
{
    title: {type: String,required: true},
    description: {type: String, maxlength: 120},
    text: {type: String, maxlength: 600},
    image: {type: String},
    user: [{type: Schema.Types.ObjectId, ref: "User" }]
},
{
    timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
 },
}
```
​
​
​
#### Backlogs
​
- Search zero waste shops in a map
- See shops details
- Search shop by specific criteria
​
​
​
#### Links
​
GitHub
​
Deploy Link
​
Slides
​
[Miro](https://miro.com/app/board/o9J_le4aCjo=/)
​
[Trello](https://trello.com/b/lK8GLu0i/scoop-ironhack-wsftbcn2020-project-m2)
​
[Wireframes](https://balsamiq.cloud/s2026os/p8g8rfv/r2278)
Collapse



