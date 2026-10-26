using System.ComponentModel.DataAnnotations;

public class CategoriaRequestDto
{
    [Required]
    [StringLength(50, ErrorMessage = "El nombre no puede superar los 50 caracteres")]
    public string Nombre { get; set; } = string.Empty;

    [StringLength(200, ErrorMessage = "La descripción no puede superar los 200 caracteres")]
    public string? Descripcion { get; set; }
}
