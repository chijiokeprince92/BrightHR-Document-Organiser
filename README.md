The task
We have a section of our app where users can access documents that administrators have uploaded. Please make a web page which will do the following...

Display the files/folders
Allow a user to open a folder to see it’s contents
Sort by name/size/date
Filter by filename
The following is an example JSON structure you may want to use, feel free to choose your own if you think of a more appropriate shape.

[
    {     
        "type": "pdf",     
        "name": "Employee Handbook",     
        "added": "2017-01-06"
    },
    {     
        "type": "pdf",     
        "name": "Public Holiday policy",     
        "added": "2016-12-06"
    },
    {     
        "type": "folder",     
        "name": "Expenses",     
        "files": 
        [
            {         
                "type": "doc",         
                "name": "Expenses claim form",
                "added": "2017-05-02"
            },
            {         
                "type": "doc",
                "name": "Fuel allowances",
                "added": "2017-05-03"
            }
        ]
    },
    {     
        "type": "csv",
        "name": "Cost centres",     
        "added": "2016-08-12"
    },
    {     
        "type": "folder",     
        "name": "Misc",     
        "files": 
        [
            {         
                "type": "doc",         
                "name": "Christmas party",         
                "added": "2017-12-01"
            },
            {         
                "type": "mov",         
                "name": "Welcome to the company!",         
                "added": "2015-04-24"
            }
        ]
    }
]