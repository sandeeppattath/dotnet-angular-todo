using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using System.Text;
using ToDoApplicationAPI.Data;
using ToDoApplicationAPI.Models;
using ToDoApplicationAPI.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();

string connectionString = builder.Configuration.GetConnectionString("ToDoConnection");

builder.Services.AddDbContext<ToDoDbContext>(options =>
{
    options.UseSqlServer(connectionString);
});


builder.Services.AddSwaggerGen(options =>
{
    options.SwaggerDoc("v1", new OpenApiInfo { Title = "Todo APIs", Version = "v1" });

});

builder.Services.AddScoped<IToDoRepository, ToDoRepository>();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularApp",
    builder =>
    {
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader();
    });
});


var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
    
}

app.UseCors("AllowAngularApp");

app.UseHttpsRedirection();

app.MapControllers();

app.Run();
