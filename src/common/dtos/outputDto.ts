export interface outputDto<I> {
  // The outputDto interface can be extended to include common properties for all output DTOs
  success: boolean; // Indicates if the operation was successful
  result?: I; // Optional data field to hold the result of the operation
  error: Error[] | null; // Optional error field to hold any errors that occurred during the operation
}

interface Error {
  type: string; // Type of error (e.g., 'ValidationError', 'DatabaseError')
  message: string; // Error message providing details about the error
}
