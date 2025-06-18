export interface inputDto<I> {
  // This interface can be extended to include common properties for input DTOs
  // For example, you might want to include a timestamp
  timestamp: string | Date;
  input: I; // The actual input data for the use case:
}
