using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace GerenciadorAcademico.Migrations
{
    public partial class secondmigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "aprovado",
                table: "Alunos",
                newName: "Aprovado");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "Aprovado",
                table: "Alunos",
                newName: "aprovado");
        }
    }
}
