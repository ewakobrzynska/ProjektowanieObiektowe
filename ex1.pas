program ex1;

var
  lista_liczb: array[1..50] of Integer;
  i: Integer;

begin
  // init
  Randomize;

  // generate and print
  for i := 1 to 50 do
  begin
    lista_liczb[i] := Random(101); // random 1 to 100
    writeln('Liczba ', i, ': ', lista_liczb[i]);
  end;
end.
