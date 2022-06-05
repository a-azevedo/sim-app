using System.ComponentModel.DataAnnotations;

namespace GerenciadorAcademico.Models
{
    public class Materia
    {
        [Key]
        public int Id { get; set; }

        public string Nome { get; set; }

        public double Avaliacao1 { get; set; }
        
        public double Avaliacao2 { get; set; }

        public double Avaliacao3 { get; set; }
    }
}
