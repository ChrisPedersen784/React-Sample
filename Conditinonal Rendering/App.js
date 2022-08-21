import React from "react"

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    
    
    const msg = messages.length
    
    return (
        <div>
           {msg === 0 && <h2> You're all caught up</h2>}
           {msg > 1 && <h2> you have {msg} unread messages</h2> }
           {msg === 1 && <h2> you have {msg} unread message </h2> }
        </div>
    )
}
