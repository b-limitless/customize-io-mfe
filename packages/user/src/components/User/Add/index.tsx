import React from 'react'

type Props = {}

const authorizations = [
    {
        role: "customer service",
        permissions: [
            {
                title: "accept call",
                id: "accept_call"
            }, 
            {
                title: "reply customer",
                id: "reply_customer"
            },
            {
                title: "update user",
                id: "update_user"
            },

        ]
    }, 
    {
        role: "customer service",
        permissions: [
            {
                title: "accept call",
                id: "accept_call"
            }, 
            {
                title: "reply customer",
                id: "reply_customer"
            },
            {
                title: "update user",
                id: "update_user"
            },

        ]
    }
]

export default function index({}: Props) {
  return (
    <div>index</div>
  )
}