
// Iterative javascript program
// to search an element
// in linked list

//Node class
class Node {
	constructor(d) {
		this.data = d;
		this.next = null;
	}
}

// Linked list class

	var head; // Head of list

	// Inserts a new node at the front of the list
	function push(new_data)
	{
		// Allocate new node and putting data
		var new_node = new Node(new_data);

		// Make next of new node as head
		new_node.next = head;

		// Move the head to point to new Node
		head = new_node;
	}

	// Checks whether the value
	// x is present in linked list
	function search( head , x)
	{
		var current = head; // Initialize current
		while (current != null) {
			if (current.data == x)
				return true; // data found
			current = current.next;
		}
		return false; // data not found
	}

	// Driver function to test
	// the above functions
	

		// Start with the empty list
		/*
		Use push() to construct below
		list 14->21->11->30->10
		*/
		push(10);
		push(30);
		push(11);
		push(21);
		push(14);

		if (search(head, 21))  
			console.log("1"); //search is 21 the list check and gives 1 for present 
		else
			console.log("-1"); //Otrherwise it gives -1 not Present in the list //
