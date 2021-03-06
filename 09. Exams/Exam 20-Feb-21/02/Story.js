class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = []; //[username]
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (this._likes.includes(username) == false) {
            throw new Error("You can't dislike this story!");
        }

        this._likes.splice(this._likes.indexOf(username), 1);
        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {

        const comment = this._comments.find(c => c.id == id);

        if (id == undefined || comment == undefined) {
            const newComment = {
                id: (this._comments.length == 0) ? 1 : this._comments.length + 1,
                username,
                content,
                replies: []
            };

            this._comments.push(newComment);

            return `${username} commented on ${this.title}`;
        }

        //has comment
        const reply = {
            id: `${comment.id}.${(comment.replies.length == 0) ? 1 : comment.replies.length + 1}`,
            username,
            content
        };

        comment.replies.push(reply);

        return 'You replied successfully';

    }

    toString(sortingType) {

        const sortMethod = {
            asc: (a, b) => a.id - b.id,
            desc: (a, b) => b.id - a.id,
            username: (a, b) => a.username.localeCompare(b.username),
        }

        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push('Comments:');
        this._comments.sort(sortMethod[sortingType]).forEach(c => {
            result.push(`-- ${c.id}. ${c.username}: ${c.content}`);
            c.replies.sort(sortMethod[sortingType]).forEach(r => result.push(`--- ${r.id}. ${r.username}: ${r.content}`));
        });

        return result.join('\n');
    }
};


let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));
