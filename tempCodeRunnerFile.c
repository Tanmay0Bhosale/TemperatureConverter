#include <stdio.h>
int stack[100], ch, n, top;
void push()
{
    if(top>=n-1)
    printf("\nStack Overflow");
    else
    {
        printf("Enter an integer: ");
        scanf("%d", &stack[++top]);
    }
}
void pop()
{
    if(top<=-1)
    printf("\nStack Underflow");
    else
    printf("\nPopped out: %d", stack[top--]);
}
void display()
{
    if(top>=0)
    {
        printf("\nThe elements in the stack are given below");
        for(int i=top; i>=0; i--)
        printf("\n%d", stack[i]);
    }
    else
    printf("\nStack is empty");
}
void main()
{
    top=-1;
    printf("\nEnter the max size of the stack: ");
    scanf("%d", &n);
    printf("Stack Operations\n1. Push\n2. Pop\n3. Display\n4. Exit");
    do
    {
        printf("\nEnter your choice: ");
        scanf("%d", &ch);
        switch(ch)
        {
            case 1:
            push();
            break;
            case 2:
            pop();
            break;
            case 3:
            display();
            break;
            case 4:
            printf("Bye!");
            break;
            default:
            printf("\nInvalid Choice! Try Again!");
        }
    }
    while(ch!=4);
}