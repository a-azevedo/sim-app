using GerenciadorAcademico.Models;
using Microsoft.EntityFrameworkCore;

namespace GerenciadorAcademico.Data
{
    public class AlunoContext : DbContext
    {
        public AlunoContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<Aluno> Alunos { get; set; }
        public DbSet<Materia> Materias { get; set; }
        public DbSet<Turma> Turma { get; set; }
    }
}
