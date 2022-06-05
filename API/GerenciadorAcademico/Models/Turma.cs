using System.Collections;
using System.ComponentModel.DataAnnotations;

namespace GerenciadorAcademico.Models
{
    public class Turma
    {
        [Key]
        public int Id { get; set; }

        public List<Aluno> listaDeAlunos;
    }
}
