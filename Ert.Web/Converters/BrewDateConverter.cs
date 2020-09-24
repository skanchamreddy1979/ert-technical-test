using System;
using System.Linq;

using Newtonsoft.Json;

namespace Ert.Web.Converters
{
    public class BrewDateConverter : JsonConverter<DateTime>
    {
        public override DateTime ReadJson(JsonReader reader, Type objectType, DateTime existingValue, bool hasExistingValue, JsonSerializer serializer)
        {
            string[] values = reader.Value.ToString().Split('/');

            if (values.Length != 2)
            {
                throw new InvalidCastException();
            }

            return new DateTime(Convert.ToInt32(values.Last()), Convert.ToInt32(values.First()), 1);
        }

        public override void WriteJson(JsonWriter writer, DateTime value, JsonSerializer serializer)
        {
            writer.WriteValue($"{value.Month}/{value.Year}");
        }
    }
}
