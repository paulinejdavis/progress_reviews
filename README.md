## {audio plugins}

## User stories

```

Musicians apply our filters to the tracks. That changes how the track sounds 
Build a band pass filter. 

A band pass filter takes a sound wave and checks if the frequency are above
a particular limit. If below it gets adjusted. Adjusting all the frequencies to be
in a particular range.

Input

[60,10,45,60,1500]

Output

[60,40,45,60,1000]

Input

[60,10,45,60,1500],20,50

Output

[50,20,45,50,50]

So by default 10 changes to 40 and 1000 to 1500. The default setting is 
Except where the additional arguments are outside of the array which outlines the
lower and upper frequency.

lowest is 40
Highest is 1000


```

|  Input                  | Output                 |
---------------------------------------------------|

| [40,45,50,100]          | [40,45,50,100]         |

| [30,40,45,1500]         | [40,40,45,1000]        |

| [60,10,45,60,1500]      | [60,40,45,60,1000]     |

| [20,30,40,100],10,40    | [20,30,40,40]          |
|                         |                        |
|[60,10,45,60,1500],20,50 | [50,20,45,50,50]       |