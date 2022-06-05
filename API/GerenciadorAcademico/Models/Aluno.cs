using System.ComponentModel.DataAnnotations;

namespace GerenciadorAcademico.Models
{
    public class Aluno
    {
        [Key]
        public int Id { get; set; }
        public string Nome { get; set; }
        public bool Aprovado { get; set; }        
        Turma Turma { get; set; }
    }
}
