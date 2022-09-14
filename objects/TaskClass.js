import moment from 'moment'

class Task {
    constructor(title, description, due, created ){
        this.title = title
        this.description = description
        this.due = due
        this.created = created
    }

    // get readableDueDate() {
    //     return moment(this.due).format('MMM Do YYYY, hh:mm')
    // }

    // get readableCreatedDate() {
    //     return moment(this.created).format('MMM Do YYYY, hh:mm')
    // }
}

export default Task